---
tags:
- arch62-prm1
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.6.2 Verschlüsselung von Weiterverkehrsverbindungen
stmt_target_object_category: Externe Netzanschlüsse
stmt_modal_verb: SOLLTE
stmt_action_word: verschlüsseln
stmt_documentation: Konfigurationshistorie
control_effort_level: '3'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.6.2 - Verschlüsselung von Weiterverkehrsverbindungen
Gruppe: [ARCH.6 Vertraulichkeit und Integrität im Weitverkehrsnetz](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.6%20Vertraulichkeit%20und%20Integrität%20im%20Weitverkehrsnetz.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Architektur (ARCH)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH%20Architektur.md)*<br> *  &rarr; [Vertraulichkeit und Integrität im Weitverkehrsnetz](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.6%20Vertraulichkeit%20und%20Integrität%20im%20Weitverkehrsnetz.md) *</div> | [Architektur](practices_Architektur_6710c63e-bb40-4742-9bae-1779ba21f2a9) | [Externe Netzanschlüsse](target_object_categories_Externe_Netzanschlüsse_a9521914-ccf9-4c20-8eef-2dd912fb815d) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | Verbindungen ins Weitverkehrsnetz | nach {{einem anerkannten Standard}} | [verschlüsseln](action_words_verschlüsseln_4dc9ef92-2124-449a-9a99-61095d271599) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Architektur für Externe Netzanschlüsse SOLLTE Verbindungen ins Weitverkehrsnetz nach {{ insert: param, arch.6.2-prm1 }} verschlüsseln.</span>

> [!info]- Guidance
>Ohne ein etabliertes Verschlüsselungsverfahren könnte sensible Kommunikation im Klartext übertragen werden, was Angreifern ein einfaches Mitlesen ermöglichen könnte – etwa durch Abhören in einem öffentlichen WLAN, durch kompromittierte Router eines Providers oder durch staatliche Massenüberwachung. Auch die unbemerkte Manipulation von Datenpaketen auf dem Weg zwischen Institution und Gegenstelle könnte die Integrität der übermittelten Inhalte gefährden und beispielsweise zu manipulierten Geschäftsdaten oder Schadcode-Einschleusungen führen. Der Einsatz von anerkannten Standards zur Verschlüsselung kann Vertraulichkeit und Integrität wahren, indem die Inhalte für Unbefugte unlesbar bleiben und Kommunikationspartner einander zuverlässig identifizieren können. So kann beispielsweise sichergestellt werden, dass eine entfernte Niederlassung tatsächlich mit der Zentrale verbunden ist und nicht mit einem Angreifer, der den Datenverkehr umleitet. Im Kontext externer Netzanschlüsse bezeichnet „Weitverkehrsnetz“ typischerweise öffentliche Netze wie das Internet oder auch gemietete WAN-Verbindungen über Telekommunikationsanbieter, die institutionsextern betrieben und potenziell unsicher sind. Anerkannte Standards sind z.B. TLS, IPsec oder WireGuard, die regelmäßig überprüft und weit verbreitet eingesetzt werden. Eine Institution kann diese Anforderung durch konkrete Maßnahmen umsetzen, z. B. indem sie Site-to-Site-VPNs zwischen Standorten einrichtet, Remote-Zugriffe von Mitarbeitenden ausschließlich über VPN-Gateways mit Zwei-Faktor-Authentisierung ermöglicht und auch Cloud-Dienste konsequent über gesicherte Verbindungen anbindet.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 1999335e-7d66-4dc5-8960-8115234e8e23 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 1999335e-7d66-4dc5-8960-8115234e8e23 |
