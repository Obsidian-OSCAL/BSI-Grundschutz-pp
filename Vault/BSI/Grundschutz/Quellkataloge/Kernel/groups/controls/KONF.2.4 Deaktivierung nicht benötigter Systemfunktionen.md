---
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.2.4 Deaktivierung nicht benötigter Systemfunktionen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.2.4 - Deaktivierung nicht benötigter Systemfunktionen
Gruppe: [KONF.2 Konfiguration von Systemen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.2%20Konfiguration%20von%20Systemen.md)
---

> [!info]- Untergeordnete Controls
> [KONF.2.4.1 Nicht benötigte Zertifikate](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.2.4.1%20Nicht%20benötigte%20Zertifikate.md)> [KONF.2.4.2 Externe Cloud-Anbindungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.2.4.2%20Externe%20Cloud-Anbindungen.md)### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Konfiguration von Systemen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.2%20Konfiguration%20von%20Systemen.md) *** | IT-Systeme | SOLLTE | nicht benötigte Systemfunktionen |  | deaktivieren | Konfigurationshistorie | >Konfiguration für IT-Systeme SOLLTE nicht benötigte Systemfunktionen deaktivieren.

> [!info]- Guidance
>Die Deaktivierung von Funktionen, die für Betrieb oder aus Sicherheitssicht nicht benötigt werden, hilft, die Angriffsfläche und Fehlerkomplexität zu verringern, z.B. unnötige Identitäten, ggf. nicht benötigte Schnittstellen wie Bluetooth, nicht verwendete Netzprotokolle wie NTLMv1 Authentifizierung, schwache Verschlüsselungsalgorithmen wie TLS1.1, die Anzeige von Nachrichteninhalten auf dem Sperrbildschirm oder nicht benötigte System- oder Telemetriedienste. Relevant sind dabei sowohl Betriebssystem- als auch Firmwarefunktionen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 24c072af-d71b-4d57-8b8f-119194e5cb8a |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | 24c072af-d71b-4d57-8b8f-119194e5cb8a |
