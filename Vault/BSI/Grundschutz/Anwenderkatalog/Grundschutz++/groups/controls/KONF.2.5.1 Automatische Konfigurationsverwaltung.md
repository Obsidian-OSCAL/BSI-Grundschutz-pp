---
tags: konf251-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.2.5.1 Automatische Konfigurationsverwaltung
parent_control: KONF.2.5 Überprüfung der Konfiguration
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.2.5.1 - Automatische Konfigurationsverwaltung
Gruppe: [KONF.2 Konfiguration von Systemen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.2%20Konfiguration%20von%20Systemen.md)
---

** Übergeordnetes Control: ** [KONF.2.5 Überprüfung der Konfiguration](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.2.5%20Überprüfung%20der%20Konfiguration.md)
> [!info]- Untergeordnete Controls
> [KONF.2.5.1.1 Automatische Konfigurationsverwaltung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.2.5.1.1%20Automatische%20Konfigurationsverwaltung.md)### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Konfiguration von Systemen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.2%20Konfiguration%20von%20Systemen.md) *** | IT-Systeme | KANN | die Überprüfung der Konfiguration durch {{einen automatisierten Mechanismus}} |  | aktivieren | Konfigurationshistorie | >Konfiguration für IT-Systeme KANN die Überprüfung der Konfiguration durch {{ insert: param, konf.2.5.1-prm1 }} aktivieren.

> [!info]- Guidance
>Eine automatische Konfigurationsverwaltung ermöglicht eine einheitliche Konfiguration, z.B. für Passwortvorgaben, Verschlüsselung oder automatische Updates. Insbesondere bei der Verwaltung zahlreicher Endgeräte oder einer Bring Your Own Device Strategie (BYOD) bietet eine solche Verwaltung den einzig praktikablen Ansatz die Sicherheitsparameter der Geräte zu kontrollieren. Dies kann über selbst betriebenes zentrales Managementsystem (UEM oder MDM), Cloud-Dienste wie Intune oder Konfigurationsmanagement-Werkzeuge wie Ansible umgesetzt werden. Bei Abweichungen kann entweder ein automatisierter Mechanismus die erforderliche Konfiguration vornehmen, oder eine manuelle Entscheidung über die passende Behandlung erfolgen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | fceb6b0b-2cf9-4644-9f48-c6b307b2d0ad |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | fceb6b0b-2cf9-4644-9f48-c6b307b2d0ad |
