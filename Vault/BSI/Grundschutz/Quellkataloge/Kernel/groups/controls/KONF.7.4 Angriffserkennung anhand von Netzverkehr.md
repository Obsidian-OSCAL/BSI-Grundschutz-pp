---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.7.4 Angriffserkennung anhand von Netzverkehr
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.7.4 - Angriffserkennung anhand von Netzverkehr
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.7 Schutz vor Schadcode](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.7%20Schutz%20vor%20Schadcode.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Schutz vor Schadcode](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.7%20Schutz%20vor%20Schadcode.md) *** | IT-Systeme | KANN | Angriffserkennung anhand von Netzverkehr |  | aktivieren | Konfigurationshistorie | >Konfiguration für IT-Systeme KANN Angriffserkennung anhand von Netzverkehr aktivieren.

> [!info]- Guidance
>Hierbei wird eine netzwerkbasierte Bedrohungsanalyse direkt auf dem IT-System durchgeführt. Dieser Ansatz, oft als Host-based Network Intrusion Detection System (H-NIDS) oder Endpoint Detection and Response (EDR) bezeichnet, ermöglicht eine tiefere Sicht in das Systemverhalten. Statt nur den Datenstrom am Perimeter zu überwachen, kann so die Institution verdächtige Aktivitäten wie das Scannen von Netzwerk-Ports, den Aufbau ungewöhnlicher Verbindungen zu Command-and-Control-Servern oder den Versuch der Datenexfiltration erkennen. Ohne diese Erkennung könnte sich ein Angreifer, der bereits in das Netzwerk eingedrungen ist, unentdeckt von System zu System bewegen oder sensible Daten unbemerkt nach außen senden. Die dezentrale Erkennung auf den Clients kann zudem dabei helfen, interne Lateral-Movement-Versuche zu identifizieren, da der Datenverkehr zwischen den Systemen überwacht wird, selbst wenn er das interne Netzwerk nicht verlässt. Um diese Anforderung umzusetzen, kann die Institution spezialisierte EDR- oder Endpoint-Security-Lösungen nutzen, die eine integrierte Funktion zur Netzwerküberwachung bieten. Es kann ebenfalls eine regelbasierte Erkennung über lokale Host-Firewalls oder Sicherheitsagenten aktiviert werden, die bestimmte Muster im Netzwerkverkehr blockieren oder protokollieren. Bei der Einführung solcher Maßnahmen ist es entscheidend, die Performance des Clients zu berücksichtigen. Daher kann die Konfiguration so optimiert werden, dass sie nur kritische Protokolle oder Ports überwacht, um die Systemressourcen zu schonen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | e6dd6f93-4901-41bd-86ed-ba88ff5c5bf3 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | e6dd6f93-4901-41bd-86ed-ba88ff5c5bf3 |

> [!info]- Links> > related: [DET.4.2 Automatische Angriffserkennung](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.4.2%20Automatische%20Angriffserkennung.md)
