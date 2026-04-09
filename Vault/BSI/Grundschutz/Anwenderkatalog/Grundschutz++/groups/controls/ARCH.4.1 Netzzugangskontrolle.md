---
tags: Network_Access_Control_Rogue_Access_Point
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.4.1 Netzzugangskontrolle
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.4.1 - Netzzugangskontrolle
Tags: "[Network Access Control](tags_Network Access Control)" "[Rogue Access Point](tags_Rogue Access Point)"
Gruppe: [ARCH.4 Zugangsbeschränkungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.4%20Zugangsbeschränkungen.md)
---

> [!info]- Untergeordnete Controls
> [ARCH.4.1.1 Dynamische Netzzugangskontrolle](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/ARCH.4.1.1%20Dynamische%20Netzzugangskontrolle.md)> [ARCH.4.1.2 Quarantäne](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/ARCH.4.1.2%20Quarantäne.md)### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Architektur (ARCH)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH%20Architektur.md)**<br> ***  &rarr; [Zugangsbeschränkungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.4%20Zugangsbeschränkungen.md) *** | Interne Netzsegmente | SOLLTE | den Zugriff von IT-Systemen auf das Netzsegment | im Einklang mit den zugehörigen Anforderungen des Identitäts- und Berechtigungsmanagements | authentifizieren | Konfigurationshistorie | >Architektur für Interne Netzsegmente SOLLTE den Zugriff von IT-Systemen auf das Netzsegment im Einklang mit den zugehörigen Anforderungen des Identitäts- und Berechtigungsmanagements authentifizieren.

> [!info]- Guidance
>Unautorisierte Systeme könnten Ausgangspunkt von Angriffen sein oder zu unbeabsichtigten Störungen im Netz führen. Netzwerkzugangskontrolle (Network Access Control, NAC) bietet eine wirksame Möglichkeit, den Zugriff auf Netzwerke kontrolliert zu steuern, insbesondere in schützenswerten Bereichen wie Management-Netzen, Produktionssystemen oder Forschungsumgebungen. Die Auswahl der Netzbereiche für die Netzzugangskontrolle richtet sich nach dem Schutzbedarf oder Risikoprofil. Dabei empfiehlt sich zu dokumentieren, welche Zonen mit NAC abgesichert werden und warum andere bewusst nicht berücksichtigt werden (z.B. aufgrund technischer Einschränkungen oder fehlender Relevanz). Die Umsetzung kann (1) auf Zertifikaten basieren (X.509, EAP‑TLS or mTLS), (2) auf Zugangskonten basieren (IEEE 802.1X, RADIUS), (3) auf dynamischen Prüfungen basieren (z.B. Sicherheitspatches). Eine Authentifizierung, die nur auf MAC-Adressen basiert, gilt dagegen nicht mehr als zeitgemäß, da MAC-Adressen sehr leicht ausgelesen und auf Systemen eingestellt werden könnten und so unberechtigte IT-Systeme zu leicht auch Zugang erhalten. Wenn Systeme die Netzzugangskontrolle nicht oder nur unzureichend unterstützen, ist für solche Systeme anstelle einer Netzzugangskontrolle die Nutzung eines eigenen Netzsegmentes empfehlenswert. Für die Verbindung zwischen RADIUS-Servern, Switches und Verzeichnisdiensten kommen Protokolle wie RadSec, IPsec oder LDAPS in Betracht. Die Verwendung nur einer einzigen Serverkonfigurationen (z.B. ein gemeinsamer RADIUS-Server für NAC und VPN) führt zu Komplexität und Angriffspunkten. Daher werden getrennte Systeme empfohlen. Dies gilt insbesondere bei unterschiedlichen Schutzklassen im LAN/WLAN oder Büro-/Produktionsnetz. Bei WLANs kann die Umsetzung in größeren Umgebungen mittels 802.1X (WPA3-Enterprise) und an kleineren Zugangspunkten oder Gastnetzen durch SAE (WPA3-Personal) erfolgen. Da es sich um eine automatisierte Sicherheitsrichtlinie handelt, ist hier auch die Anforderung zur Überwachung solcher Richtlinien anwendbar. Überwachungskriterien sind hier z.B. die Erreichbarkeit des RADIUS-Servers, die Antwortzeiten, die Last auf Access-Switches und andere Metriken. Für die Überwachung der Integrität ist insbesondere die Authentifizierung oder deren Fehlschlag relevant, z.B. viele abgelehnte Authentisierungen, plötzliche Deaktivierung eines Supplicants. Durch synthetische Anfragen an Testkonten kann die gesamte Authentisierungskette regelmäßig geprüft werden. Die Formulierung "im Einklang mit den Festlegungen des Identitäts- und Berechtigungsmanagements" bedeutet, dass die Authentifizierung so erfolgt, wie in der Praktik IDM festgelegt. Hierzu gehört insbesondere die Verwendung aktueller kryptographischer Verfahren, wie sie im Thema Kryptographie zu finden ist.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 9ec9762e-c115-4e56-8b45-b88a872f47ce |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 9ec9762e-c115-4e56-8b45-b88a872f47ce |

> [!info]- Links> > related: [DET.4.4 Änderungen an Sicherheitsrichtlinien](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/DET.4.4%20Änderungen%20an%20Sicherheitsrichtlinien.md)> > related: [DET.3.1.8 Privilegierte Ereignisse](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/DET.3.1.8%20Privilegierte%20Ereignisse.md)
