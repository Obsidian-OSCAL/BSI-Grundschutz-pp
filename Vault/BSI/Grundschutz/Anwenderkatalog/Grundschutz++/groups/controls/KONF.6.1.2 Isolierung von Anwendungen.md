---
tags:
- produktbeschreibung
- konf612-prm1
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.6.1.2 Isolierung von Anwendungen
parent_control: KONF.6.1 Minimal erforderliche Berechtigungen für Anwendungen
stmt_target_object_category: IT-Systeme
stmt_modal_verb: KANN
stmt_action_word: aktivieren
stmt_documentation: Konfigurationshistorie
control_effort_level: '5'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.6.1.2 - Isolierung von Anwendungen
Tag: [[tags_Produktbeschreibung|Produktbeschreibung]]
Gruppe: [KONF.6 Rollen und Berechtigungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.6%20Rollen%20und%20Berechtigungen.md)
---

** Übergeordnetes Control: ** [KONF.6.1 Minimal erforderliche Berechtigungen für Anwendungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.6.1%20Minimal%20erforderliche%20Berechtigungen%20für%20Anwendungen.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Rollen und Berechtigungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.6%20Rollen%20und%20Berechtigungen.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [IT-Systeme](target_object_categories_IT-Systeme_427da6dd-d744-4b2b-88b7-f0a695f21e14) | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | die Isolierung | von {{bestimmten Anwendungen}} | [aktivieren](action_words_aktivieren_4d9da359-34e9-41b2-b198-ed53920a0414) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für IT-Systeme KANN die Isolierung von {{ insert: param, konf.6.1.2-prm1 }} aktivieren.</span>

> [!info]- Guidance
>Die Isolation von Anwendungen (auch Kapselung oder Application Sandboxing genannt) dient dazu, die Angriffsfläche eines Systems zu reduzieren und die Vertraulichkeit, Integrität sowie Verfügbarkeit kritischer Komponenten besser zu schützen. Durch eine klare Trennung der Anwendungs- und Systemprozesse und von deren Ressourcenzugriffen (Netzwerk, Datei‑ oder Geräte‑I/O) kann eine kompromittierte Applikation nicht unbegrenzt auf weitere Systemressourcen zugreifen, sondern ist auf genau definierte Schnittstellen beschränkt. Bestimmte Anwendungen meint hier, dass konkret festgelegt wird, welche Anwendungen konkret isoliert ausgeführt werden. Dies ermöglicht es, Fehlfunktionen oder Angriffe einzudämmen, Schadsoftware leichter zu erkennen und Verantwortlichkeiten einzelner Module transparent zu halten. Dies kann z.B. durch Containerisierung oder eine Microservice-Architektur, in der jede Komponente nur über REST- oder Message-Queue-Schnittstellen kommuniziert umgesetzt werden. Auch klassische Virtualisierung (Gastsysteme mit Hypervisor) oder Betriebssystemfunktionen wie SELinux/AppArmor‑Profile und chroot‑Jails zählen dazu, weil sie Applikationen auf genau festgelegte Ressourcen beschränken. Im Kontext der Containerisierung empfiehlt es sich ebenfalls eine feste Zuordnung von Containern zu Container-Hosts vorzunehmen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | d380c6d8-1ab0-4e4b-bcca-2e620b40d934 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | d380c6d8-1ab0-4e4b-bcca-2e620b40d934 |
