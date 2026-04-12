---
tags:
- produktbeschreibung
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.6.3 Kiosk-Modus
stmt_target_object_category: Endgeräte
stmt_modal_verb: KANN
stmt_action_word: aktivieren
stmt_documentation: Konfigurationshistorie
control_effort_level: '5'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.6.3 - Kiosk-Modus
Tag: [[tags_Produktbeschreibung|Produktbeschreibung]]
Gruppe: [KONF.6 Rollen und Berechtigungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.6%20Rollen%20und%20Berechtigungen.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Rollen und Berechtigungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.6%20Rollen%20und%20Berechtigungen.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [Endgeräte](target_object_categories_Endgeräte_837781a4-7b47-4695-9545-a3310eac7a66) | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | das automatische Zurücksetzen auf einen definierten Zustand | nach der Nutzung | [aktivieren](action_words_aktivieren_4d9da359-34e9-41b2-b198-ed53920a0414) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für Endgeräte KANN das automatische Zurücksetzen auf einen definierten Zustand nach der Nutzung aktivieren.</span>

> [!info]- Guidance
>Ein Kiosk‑Modus (auch als Gast-Zugang bezeichnet) kann dazu dienen, die Integrität und den definierten Ausgangszustand eines Systems dauerhaft sicherzustellen, indem nach jeder Sitzung oder in regelmäßigen Abständen ein vollständiger Rücksetzvorgang angestoßen wird. Damit soll verhindert werden, dass ungewollte Änderungen – etwa durch Malware, böswillige Manipulation oder versehentlich abgelegte Nutzerdaten – dauerhaft auf dem System verbleiben. Gleichzeitig kann so gewährleistet werden, dass jede neue Nutzer­session in einer standardisierten, getesteten Umgebung beginnt, was sowohl den Support‑Aufwand reduziert als auch Datenschutzaspekte stärkt, da keine personenbezogenen Daten auf dem Gerät zurückbleiben können. Typische Anwendungsfälle können öffentliche Terminals in Bibliotheken oder Behörden, digitale Informations­stelen in Museen und Einkaufszentren sowie Schulungs‑ oder Präsentationsrechner in Unternehmen sein. In solchen Szenarien kann das System beim Ausloggen oder nach einer festgelegten Zeit (z. B. nachts) automatisch auf ein sauberes Basis-Image zurückgesetzt werden. Denkbar ist auch ein Einsatz in Fabrikumgebungen, um Versuchs‑ und Prüfsysteme immer wieder in einen definierten Ausgangszustand zu bringen, oder in Testlaboren für Software, wo nach jedem Testlauf eine reine Umgebung erforderlich ist.  Für die produktneutrale Umsetzung kann man beispielsweise mit Virtualisierungs­technologien arbeiten, die mittels Snapshot‑Rollback beim Neustart eine saubere VM‑Instanz bereitstellen. Alternativ kann ein Live‑Betriebssystem vollständig im Arbeitsspeicher laufen oder das Dateisystem über Overlay‑Techniken (z. B. OverlayFS, AUFS) nur virtuell überschrieben werden – alle Änderungen verwerfen sich beim Neustart automatisch. Auch der Einsatz von read‑only‑Partitionen kombiniert mit einem Schreibbereich in RAM kann eine einfache Lösung sein. Skript­basierte Cron‑Jobs oder Systemd‑Timer können den Rücksetz­prozess zu definierten Zeiten anstoßen. Externes Logging und Konfigurations­management (etwa über Ansible oder Puppet) kann dabei helfen, wichtige Ereignisse und Konfigurations­änderungen zu protokollieren, ohne den Kiosk‑Modus zu beeinträchtigen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 1b90a130-be97-42bf-8d30-8458a1d743ee |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 1b90a130-be97-42bf-8d30-8458a1d743ee |
