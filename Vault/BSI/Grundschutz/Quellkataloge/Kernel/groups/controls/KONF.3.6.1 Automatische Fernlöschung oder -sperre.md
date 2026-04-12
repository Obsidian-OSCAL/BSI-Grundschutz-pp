---
tags:
- produktbeschreibung
- konf361-prm1
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.3.6.1 Automatische Fernlöschung oder -sperre
parent_control: KONF.3.6 Fernlöschung oder -sperre
stmt_target_object_category: Endgeräte
stmt_modal_verb: KANN
stmt_action_word: aktivieren
stmt_documentation: Konfigurationshistorie
control_effort_level: '5'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.3.6.1 - Automatische Fernlöschung oder -sperre
Tag: [[tags_Produktbeschreibung|Produktbeschreibung]]
Gruppe: [KONF.3 Physischer Schutz](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.3%20Physischer%20Schutz.md)
---

** Übergeordnetes Control: ** [KONF.3.6 Fernlöschung oder -sperre](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.3.6%20Fernlöschung%20oder%20-sperre.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Physischer Schutz](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.3%20Physischer%20Schutz.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [Endgeräte](target_object_categories_Endgeräte_837781a4-7b47-4695-9545-a3310eac7a66) | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | eine automatische Fernlöschung oder -sperre | bei Inaktivität nach {{einer längeren Frist}} | [aktivieren](action_words_aktivieren_4d9da359-34e9-41b2-b198-ed53920a0414) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für Endgeräte KANN eine automatische Fernlöschung oder -sperre bei Inaktivität nach {{ insert: param, konf.3.6.1-prm1 }} aktivieren.</span>

> [!info]- Guidance
>Beide Mechanismen können bei längerer Inaktivität ausgelöst werden, also wenn ein Endgerät über einen bestimmten Zeitraum hinweg nicht mehr mit den Systemen der Institution in Kontakt steht oder nicht genutzt wird. Als angemessene Frist für eine solche Inaktivität können z. B. 30 Tage, 60 Tage oder 90 Tage definiert werden, abhängig vom Sicherheitsbedarf und der Einsatzumgebung. Dies kann verhindern, dass ungenutzte Geräte mit sensiblen Daten in Umlauf bleiben oder in falsche Hände geraten. Ein automatisches Entfernen oder Sperren kann hier das Risiko eines Datenabflusses erheblich reduzieren und gleichzeitig eine Kontrolle über den Gerätelebenszyklus sichern. Zur Umsetzung kann die Institution beispielsweise Mobile-Device-Management-Lösungen einsetzen, die nach Ablauf der gewählten Frist automatisiert Fernlöschung oder Fernsperre auslösen. Alternativ kann eine Endpoint-Security-Lösung integriert werden, die periodisch prüft, ob das Gerät eine Verbindung zum Netz herstellt, und bei Überschreiten des Schwellenwerts eine definierte Aktion anstößt. Auch ein Prozess, bei dem Inaktivität zunächst mit einer Warnmeldung angekündigt wird, bevor tatsächlich gesperrt oder gelöscht wird, kann die Benutzerfreundlichkeit erhöhen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | ffc45c05-597f-4be9-9358-124b4a008e50 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | ffc45c05-597f-4be9-9358-124b4a008e50 |
