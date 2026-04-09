---
tags: arch62-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.6.2 Verschlüsselung von Weiterverkehrsverbindungen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.6.2 - Verschlüsselung von Weiterverkehrsverbindungen
Gruppe: [ARCH.6 Vertraulichkeit und Integrität im Weitverkehrsnetz](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.6%20Vertraulichkeit%20und%20Integrität%20im%20Weitverkehrsnetz.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Architektur (ARCH)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH%20Architektur.md)**<br> ***  &rarr; [Vertraulichkeit und Integrität im Weitverkehrsnetz](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.6%20Vertraulichkeit%20und%20Integrität%20im%20Weitverkehrsnetz.md) *** | Externe Netzanschlüsse | SOLLTE | Verbindungen ins Weitverkehrsnetz | nach {{einem anerkannten Standard}} | verschlüsseln | Konfigurationshistorie | >Architektur für Externe Netzanschlüsse SOLLTE Verbindungen ins Weitverkehrsnetz nach {{ insert: param, arch.6.2-prm1 }} verschlüsseln.

> [!info]- Guidance
>Ohne ein etabliertes Verschlüsselungsverfahren könnte sensible Kommunikation im Klartext übertragen werden, was Angreifern ein einfaches Mitlesen ermöglichen könnte – etwa durch Abhören in einem öffentlichen WLAN, durch kompromittierte Router eines Providers oder durch staatliche Massenüberwachung. Auch die unbemerkte Manipulation von Datenpaketen auf dem Weg zwischen Institution und Gegenstelle könnte die Integrität der übermittelten Inhalte gefährden und beispielsweise zu manipulierten Geschäftsdaten oder Schadcode-Einschleusungen führen. Der Einsatz von anerkannten Standards zur Verschlüsselung kann Vertraulichkeit und Integrität wahren, indem die Inhalte für Unbefugte unlesbar bleiben und Kommunikationspartner einander zuverlässig identifizieren können. So kann beispielsweise sichergestellt werden, dass eine entfernte Niederlassung tatsächlich mit der Zentrale verbunden ist und nicht mit einem Angreifer, der den Datenverkehr umleitet. Im Kontext externer Netzanschlüsse bezeichnet „Weitverkehrsnetz“ typischerweise öffentliche Netze wie das Internet oder auch gemietete WAN-Verbindungen über Telekommunikationsanbieter, die institutionsextern betrieben und potenziell unsicher sind. Anerkannte Standards sind z.B. TLS, IPsec oder WireGuard, die regelmäßig überprüft und weit verbreitet eingesetzt werden. Eine Institution kann diese Anforderung durch konkrete Maßnahmen umsetzen, z. B. indem sie Site-to-Site-VPNs zwischen Standorten einrichtet, Remote-Zugriffe von Mitarbeitenden ausschließlich über VPN-Gateways mit Zwei-Faktor-Authentisierung ermöglicht und auch Cloud-Dienste konsequent über gesicherte Verbindungen anbindet.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 1999335e-7d66-4dc5-8960-8115234e8e23 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 1999335e-7d66-4dc5-8960-8115234e8e23 |
